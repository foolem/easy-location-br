# easy-location-br

> Encontre estados e cidades brasileiras com facilidade.

[![NPM](https://img.shields.io/npm/v/easy-location-br.svg)](https://www.npmjs.com/package/easy-location-br) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Criar selects com estados e cidades brasileiras não precisa mais ser tão complicado :brazil: :tada:

## Instalação

```bash
yarn add easy-location-br
```

ou

```bash
npm i easy-location-br
```

## CDN

<a href="https://easy-location-br.now.sh/index.js" target="_blank">https://easy-location-br.now.sh/index.js</a>

## Import ES6

```jsx
import { getAllStates, getAllCities, getStateCities } from "easy-location-br";

getAllStates();
/*
  [
    { id: 'AC', name: 'Acre' },
    { id: 'AL', name: 'Alagoas' },
    { id: 'AM', name: 'Amazonas' },
    { id: 'AP', name: 'Amapá' },
  ...]
*/

getAllCities();
/* 
  [
    { stateId: 'AC', name: 'Acrelândia' },
    { stateId: 'AC', name: 'Assis Brasil' },
    { stateId: 'AC', name: 'Brasiléia' },
    { stateId: 'AC', name: 'Bujari' }, 
  ...]
*/

getStateCities("PR");
/* 
  [ 
    { stateId: 'PR', name: 'Abatiá' },
    { stateId: 'PR', name: 'Adrianópolis' },
    { stateId: 'PR', name: 'Agudos do Sul' },
    { stateId: 'PR', name: 'Almirante Tamandaré' },
  ...]
 */
```

Se divirta! :rocket:
