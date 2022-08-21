module.exports = {
  '*.ts': [
    'eslint --fix',
    'git add'
  ],
  // '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
  //   'yarn lint:prettier --parser json',
  // ],
}
