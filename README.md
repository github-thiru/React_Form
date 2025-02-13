

forms 
it is used to collect user input data
form:
input:- text email password date file radio checkbox number

select :- datalist ,options
button:- button,submit

form events onClick onSubmit  onChange

controlled components:- takes the input data from the users and stores in the state later performs dom manuplication

uncontrolled components :-directly manuplicating dom for getting data
examples;-useref(hook)


class Loginform  extends React component{
    constructor(){

    }
}

id=" " attribute is mandatorry if you not provide id bookmarking not support

name="" attribute it purpose backend data validation purpose "key" & to store database same key to acces to store the data


let obj={
    name:"thiru",
    age:20
}

obj.name //thiru    this is static way of accesing data
obj["name"]     [note:- every key is a string]           this is dynamic way of accesing data


 handlechange=(e)=>{
    console.log(e)  //e mean event trigger enter input value then evemt trigger so target value and  name so {e.target.value}or {e.target.name }  both are it acesss
  }