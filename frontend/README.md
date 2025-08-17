# React + TypeScript + Vite

Frontend uses React w/ Typescript and Vite.

## Sync To S3

``` bash
npm run build
aws s3 sync ./dist s3://jyyoung.com --delete --profile Prod
```
