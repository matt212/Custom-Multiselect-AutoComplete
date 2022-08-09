#### install ####
`npm install`

#### app run ####
`yarn app-dev`

`go to http://localhost:3012/multiselect`



### multiselect plugin usage ###

- `include JS  
[mutliselect-CDN](https://cdn.jsdelivr.net/gh/matt212/Custom-Multiselect@master/app/public/multiselect.js) `
- `include CSS https://raw.githubusercontent.com/matt212/Custom-Multiselect/master/app/public/multiselect.css`

#### initialize ###
- `multiselect.baseInit({id:'cltrl_filter_first_name',fieldname:'first_name'})`
- `wherein id is control id and fieldname is name of field `

#### remote/async call ###

 ```
`let cltrl_filter_gender = function (a) {
            /*me.remotefunc is important since it is used in mutliselect call and rendering*/
            me.remotefunc = function (base) {
                return new Promise(function (resolve, reject) {
                    /*response in this format*/
                    resolve({
                        rows: [{
                            gender: "m"
                        }, {
                            gender: "f"
                        }]
                    })
                })
            }
            /*multiselect Search Init*/
            multiselect.searchbarautocomplete(a)
        }`
```