# rs-caesar-cli

## Работа с приложением

-s, --shift : сдвиг

-i, --input : входной файл

-o, --output : выходной файл

-a, --action : кодирование / декодирование действия ***допустимые команды: encode | decode***

### Запуск.
Клонируем или скачиваем репозиторий. Устанавливаем пакеты с помошью команды ***npm i***.

```
node caesar.js -a encode | decode -s 20 -i input.txt -o output.txt
```

Приложение поддерживает числа больше длины латинского алфавита, отрицательные числа.

### Примечание
1. Отрицательное число в аргументе -s | --shift вводится со знаком **=**, то есть команда будет такой - ***--shift=-5 | -s=-5***.
2. При открытиее консоли для ввода текста файла удалять символы не удастся. После ввода строки нажимаем клавишу **Enter**. Выйти из режима ввода можно с помощью сочетания клавиш **CTRL + C**.
