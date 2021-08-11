import axios from './axios'

// params：参数(备注用)
let list = [].concat(require('./homePage.js'))
    .concat(require('./tags.js'))
    .concat(require('./docs.js'))
    .concat(require('./archives.js'))
    .concat(require('./siderBar.js'))
    .concat(require('./moreDemo.js'))
    .concat(require('./amusement.js'))
    .concat(require('./categories.js'))
    .concat(require('./friendLink.js'))
    .concat(require('./messageBoard.js'))
    .concat(require('./article.js'))

let api = {}
for (let k in list) {
    if (list[k].name) {
        (function (k) {
            if (list[k].method === 'post') {
                api[list[k].name] = function (d, con) {
                    return axios.post(list[k].url, d, con)
                }
            } else {
                api[list[k].name] = function (d) {
                    if (!d) {
                        d = {}
                    }
                    return axios.get(list[k].url, {
                        params: d
                    })
                }
            }
        })(k)
    }
}
export default api
