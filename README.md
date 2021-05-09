# rs-caesar-cli

## Работа с приложением

-s, --shift : сдвиг

-i, --input : входной файл

-o, --output : выходной файл

-a, --action : кодирование / декодирование действия

### Запуск.

Переходим в папку modules и относительно ее работаем с файлами, можно указывать и абсолютные пути. 

```
cd /modules
node index.js -a encode -s -20 -i ../input.txt -o ../output.txt
```
