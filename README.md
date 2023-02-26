# ITGIRLschool_JS_Week_11

## Теоретические вопросы

### 1. Сколько детей (дочерних DOM-узлов) у элемента <ul> в примере ниже
```
<ul>
    <li>Привет</li>
    <li>Мир</li>
</ul>
```
2 детей

### 2. Есть такой элемент: <input id= "input" value = "Привет">. Какой вызов поменяет значение в нём?
```
input.setValue("Пока");
```

### 3. Сколько потомков будет у <div> после кода ниже?
```
<div id="div"></div>
<p id="p">Привет</p>

<script>
  div.append(p);
  div.append(p);
</script>
```
Один

### 4. В каких случаях для элемента elem не верно elem.firstChild == elem.lastChild?
Когда у elem два или более потомков.

### 5. Какое свойство задает класс элемента?
className

### 6. Для чего используется запись: `setAttribute(name, value)`?
Устанавливает значение атрибута

### 7. Назовите метод добавления текста к документу.
createTextNode или document.write (устаревший метод)

### 8. Как получить HTML-содержимое DOM-элемента elem?
с помощью свойства innerHTML

### 9. Что такое объект события и какие у него могут быть свойства?
Объект события содержит информацию о произошедшем событии, о «кликнутом» элементе. Объект события передаётся в качестве аргумента функции-обработчику.
У объекта события множество значений. Например:
bubbles – логическое значение, указывающее на то является ли данное событие всплывающим;
cancelable – определяет можно ли событие отменить;
composed – указывает может ли событие всплывать через из теневого DOM (внутреннего DOM конкретного элемента) в обычный DOM документа;
currentTarget – элемент, привязанный к обработчику события;
target – элемент, который создал событие;
timestamp – время, когда произошло событие;
type – тип (имя) события.

### 10. Что такое BOM и DOM?
BOM (Browser Object Model) — это набор глобальных объектов, управляющих поведением браузера.
DOM (Document Object Model) - это объектная модель документа, которую браузер создает в памяти компьютера на основании HTML-кода, полученного им от сервера. Иными словами, это представление HTML-документа в виде дерева тегов.

### 11. Есть вот такая страница:
```
<!DOCTYPE HTML>
<html>

<body>
	<form name="search">
		<label>Поиск:
			<input type="text" name="search"> </label>
		<input type="submit" value="Search!"> </form>
	<hr>
	<form name="search-person">Поиск по посетителям:
		<table id="age-table">
			<tr>
				<td>Возраст:</td>
				<td id="age-list">
					<label>
						<input type="radio" name="age" value="young">до 18</label>
					<label>
						<input type="radio" name="age" value="mature">18-50</label>
					<label>
						<input type="radio" name="age" value="senior">старше 50</label>
				</td>
			</tr>
			<tr>
				<td>Дополнительно:</td>
				<td>
					<input type="text" name="info">
					<input type="text" name="info">
					<input type="text" name="info"> </td>
			</tr>
		</table>
		<input type="button" value="Search!"> </form>
</body>

</html>
```
#### Как найти в ней:
#### 1. Таблицу с `id="age-table"`
```
let table = document.getElementById('age-table');
```
#### 2. Все элементы `label` **внутри** этой таблицы (их три)
```
let elements = document.querySelectorAll('#age-table > .label');
```
#### 3. Форму `form` с именем `name="search-person"`
```
let form = document.querySelector('form[name="search-person"]');
```
### 12. Как сделать переход на другую страницу при клике на кнопку (без `<a href=...>`, только средствами JavaScript)?
Например, с помощью события onclick, добавив его к элементу <button>. Внутри onclick пишем document.location, а в качестве значения адрес желаемой веб-страницы.
```
<button onclick="document.location='page/new.html'">Переход по ссылке</button>
```

## Практическое задание
Решение практического задания с корзиной можно запустить через index.html.

Задание со звездочкой реализовано в папке Star.
