### Hexlet tests and linter status:
[![Actions Status](https://github.com/YankaZabka/frontend-project-lvl2/workflows/eslinter-check/badge.svg)](https://github.com/YankaZabka/frontend-project-lvl2/actions)
[![Actions Status](https://github.com/YankaZabka/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/YankaZabka/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/codeclimate/codeclimate/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage)](https://codeclimate.com/github/codeclimate/codeclimate/test_coverage)
##  Description 
A difference calculator is a program that recognizes the difference between two data structures.

## Utility features:

Support for different input formats: **yaml**, **json**    
Report generation in **plain text**, **style** and **json**     
```
# формат plain
$ gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed

# формат stylish
$ gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
   
```
### JSON/JSON
##### (format - 'stylish')
[![asciicast](https://asciinema.org/a/325iaecI6Jb1p1jxJm2pLvzGx.svg)](https://asciinema.org/a/325iaecI6Jb1p1jxJm2pLvzGx)
### YAML/YAML
##### (format - 'stylish')
[![asciicast](https://asciinema.org/a/eQoxOXmjffHumJxE2zUR6933K.svg)](https://asciinema.org/a/eQoxOXmjffHumJxE2zUR6933K)
### nested JSON/JSON or YAML/YAML
##### (format - 'stylish')
[![asciicast](https://asciinema.org/a/6cQJgoCkuFz8eFcC0D2FpmM4p.svg)](https://asciinema.org/a/6cQJgoCkuFz8eFcC0D2FpmM4p)
### nested JSON/JSON or YAML/YAML 
##### (format - 'plain')
[![asciicast](https://asciinema.org/a/Tu4DwNVkRDJZBcgxGXE7ygNHV.svg)](https://asciinema.org/a/Tu4DwNVkRDJZBcgxGXE7ygNHV)
### nested JSON/JSON or YAML/YAML 
##### (format - 'json')
[![asciicast](https://asciinema.org/a/Z7sXjgimVCcW1FrC6evq02Xdr.svg)](https://asciinema.org/a/Z7sXjgimVCcW1FrC6evq02Xdr)
