# ionic-drop-down-title
Drop down appears when the user presses the title, inspired by the list dropdown on Tweetbot 3 application


## Preview

![Example](https://raw.githubusercontent.com/Mohd-PH/ionic-drop-down-title/master/img/example.gif)


## Usage
### Downloading the sample project
```
git clone https://github.com/Mohd-PH/ionic-drop-down-title.git
cd ionic-drop-down-title
npm install
ionic lab
```
### To use it on your project
Copy **drop-down-title folder** to your project **src/components/** folder then import the component in app.module.ts file

example:
```
import { DropDownTitleComponent } from "../components/drop-down-title/drop-down-title"; 
```
and add DropDownTitleComponent to the declaration array.
```
@NgModule({
  declarations: [
    ...
    DropDownTitleComponent
    ...
  ],
```

then on any page you want to repalce the title with a drop down title you have to replace 
```
<ion-title><ion-title>
```
with 
```
<drop-down-title [title]="Provide the title here">
 <!-- What should appear in the dropdown -->
</drop-down-title>
```

## Theming
You can use these variables on your $colors map on variables.scss file to theme the drop down
```
drop-down-title: rgba(15, 65, 94, 0.8)
drop-down-title-active : rgb(0, 77, 120)
drop-down-title-text: white
```

## License
MIT

