#### pre-Requisites ###
-  `jquery (any version would suffice) preferred JQUERY 3.6.0 `
-  `bootstrap.min.CSS (any version would suffice) preferred Bootstrap v3.3.7`
```
<!--pre-Requisites -->
<!-- jQUERY -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js"
        integrity="sha512-n/4gHW3atM3QqRcbCn6ewmpxcLAHGaDjpEBu4xZd47N0W2oQ+6q7oc3PXstrJYXcbNU1OHdQ1T7pAP+gi5Yu8g=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        
<!-- Bootstrap  CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

<!--pre-Requisites end Here -->
```

### multiselect plugin usage (CDN links) ###

```
<!-- Multi Select AutoComplete CSS and  JS (CDN links) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/matt212/Custom-Multiselect@master/app/public/multiselect.css">
<script src="https://cdn.jsdelivr.net/gh/matt212/Custom-Multiselect-AutoComplete@master/app/public/multiselect.js"></script>
```

-  `Example:- Jsfiddle ` [Multiselect Filter JSfiddle](https://jsfiddle.net/bilbobaggins/bvu2wanq/)

#### initialize ###
 ```
 multiselect.baseInit({id:'cltrl_filter_first_name',fieldname:'first_name'}) 
```
- `wherein id is control id and fieldname is name of field `

#### remote/async call ###

 ```
let cltrl_filter_gender = function (a) {
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
        }
```

#### for EDIT use case wherein one has set /assign value to control ###

```
multiselect.multiSelectpopulate({
                rows: [{
                    first_name: "mark"
                }, {
                    first_name: "jacob"
                }]
                , fieldname: 'first_name'
                , id: 'cltrl_filter_first_name'
            })
```

### sample integration ### 
#### install ####
`npm install`

#### app run ####
`yarn app-dev`

`go to http://localhost:3012/multiselect`
