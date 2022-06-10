# React-REDUX-TypeScript-Movie-Library-

## Info: <br>
https://stackoverflow.com/questions/48967495/adding-typescript-to-existing-create-react-app-app

npm install --save typescript @types/node @types/react @types/react-dom @types/jest <br>

### tsconfig.json <br>

{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "exclude": [
    "node_modules"
  ]
} <br><br>

https://bobbyhadz.com/blog/typescript-could-not-find-a-declaration-file-for-module-react //-------------->To tackle type errors for packages like react router dom
