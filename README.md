# React-REDUX-TypeScript-Movie-Library-

## Info: <br>
https://stackoverflow.com/questions/48967495/adding-typescript-to-existing-create-react-app-app

### npm install --save typescript @types/node @types/react @types/react-dom @types/jest <br>

### tsconfig.json <br>

{<br>
  "compilerOptions": { <br>
    "target": "es5",<br>
    "lib": ["dom", "dom.iterable", "esnext"],<br>
    "allowJs": true,<br>
    "skipLibCheck": true,<br>
    "esModuleInterop": true,<br>
    "allowSyntheticDefaultImports": true,<br>
    "strict": true,<br>
    "module": "esnext",<br>
    "moduleResolution": "node",<br>
    "resolveJsonModule": true,<br>
    "isolatedModules": true,<br>
    "noEmit": true,<br>
    "jsx": "react-jsx"<br>
  },<br>
  "include": ["src"],<br>
  "exclude": [<br>
    "node_modules"<br>
  ]<br>
} <br><br>

https://bobbyhadz.com/blog/typescript-could-not-find-a-declaration-file-for-module-react //-------------->To tackle type errors for packages like react router dom
