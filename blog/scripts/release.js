const args = require('minimist')(process.argv.slice(2))
const chalk = require('chalk')
const currentVersion = require('../package.json').version
const { prompt } = require('enquirer')
const execa = require('execa')

const isDryRun = args.dry

const run = (bin, args, opts = {}) =>
  execa(bin, args, { stdio: 'inherit', ...opts })
const dryRun = (bin, args, opts = {}) =>
  console.log(chalk.blue(`[dryrun] ${bin} ${args.join(' ')}`), opts)
const runIfNotDry = isDryRun ? dryRun : run
const step = msg => console.log(chalk.cyan(msg))

async function main() {
  let targetVersion = args._[0]
  let whereCK

  if (!targetVersion) {
    // no explicit version, offer suggestions
    const { release } = await prompt ({
      type: 'select',
      name: 'release',
      message: '是否更新发布到云端仓库',
      choices: ['是','否']
    })

    if (release === '是') {
      targetVersion = (
        await prompt({
          type: 'input',
          name: 'version',
          message: '请输入你的更新的内容',
          initial: currentVersion
        })
      ).version
    } else {
      return
    }

    whereCK = await prompt ({
      type: 'select',
      name: 'whereCK',
      message: '发到哪个仓库',
      choices: ['全部','Github','Gitee']
    })
  }

  // 产生 changelog
  await run(`yarn`, ['changelog'])
  const { stdout } = await run('git', ['diff'], { stdio: 'pipe' })
  if (stdout) {
    step('\n提交更改的内容...')
    await runIfNotDry('git', ['add', '-A'])
    await runIfNotDry('git', ['commit', '-m', `release: v${targetVersion}`])
  } else {
    console.log('No changes to commit.')
  }

  // 推送到 GitHub 和 Gitee
  step('\n推送到GitHub and Gitee...')
  switch (whereCK.whereCK) {
    case '全部':
      await runIfNotDry('git', ['push', 'gitee', `master`])
      await runIfNotDry('git', ['push', 'github', `master`])
      break;
    case 'gitee':
      await runIfNotDry('git', ['push', 'gitee', `master`])
      break;
    case 'github':
      await runIfNotDry('git', ['push', 'github', `master`])
      break;
    default:
    break;
  } 

  if (isDryRun) {
    console.log(`\nDry run finished - run git diff to see package changes.`)
  }
}

main().catch(err => {
  console.error(err)
})
