# vue-snippet

> Insert text snippet with highlighting and Prismjs

### Installation

```bash
$ npm i vue-snippet --save
```
```javascript
import 'vue-snippet/dist/vue-snippet.css';
import VueSnippet from 'vue-snippet';
Vue.component('snippet', VueSnippet);
```
```html
<snippet lang="css">
.verde { color:green }
</snippet>

<snippet lang="javascript" :code="code"></snippet>
```
### Avaible props
| Prop        | Type    | Default | Description
|-------------|---------|---------|-------------------------------------------------------------|
| lang        | String  |         | Language of programming (example: javascript, php)
| code        | String  |         |  Text with the code
### Languages supported
 http://prismjs.com/#languages-list
 
### Contributing

1. Fork it ( https://github.com/mrignacio1231/vue-snippet/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request

### Contributors

- [mrignacio1231](https://github.com/mrignacio1231) Ignacio Del Nardo - creator, maintainer