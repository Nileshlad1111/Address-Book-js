
class Contact{

    //constructor
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }

    //getters and setters
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        let firstNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if(firstNameRegex.test(firstName))
            this._firstName = firstName;
        else throw "Incorrect First Name: "+firstName;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        let lastNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{3,}$");
        if(lastNameRegex.test(lastName))
            this._lastName = lastName;
        else  "Incorrect Last Name: "+ lastName;
    }
    get address(){
        return this._address;
    }
    set address(address){
        let addressRegex = RegExp("^.{4,}$");
        if(addressRegex.test(address))
            this._address = address;
        else throw "Invalid Address: "+address;
    }
    get city(){
        return this._city;
    }
    set city(city){
        let cityRegex = RegExp("^[a-zA-Z]{4,}$");
        if(cityRegex.test(city))
            this._city = city;
        else throw "Invalid City: "+city;
    }
    get state(){
        return this._state;
    }
    set state(state){
        let stateRegex = RegExp("^[a-zA-Z\\s]{4,}$");
        if(stateRegex.test(state))
            this._state = state;
        else  "Invalid State: "+state;
    }
    get zip(){
        return this._zip;
    }
    set zip(zip){
        let zipRegex = RegExp("^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$");
        if(zipRegex.test(zip))
            this._zip = zip;
        else throw "Invalid Zip: "+zip;
    }
    get phone(){
        return this._phone;
    }
    set phone(phone){
        let phoneRegex = RegExp("^[0-9-]{1,}[ ][1-9]{1}[0-9]{9}$");
        if(phoneRegex.test(phone))
            this._phone = phone;
        else  "Invalid Phone: "+phone;
    }
    get email(){
        return this._email;
    }
    set email(email){
        let emailRegex = RegExp("^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$");
        if(emailRegex.test(email))
            this._email = email;
        else throw "Invalid Email: "+email;
    }

    toString(){
        return "First Name: "+this.firstName+", Last Name: "+this.lastName + ", Address: "+this.address+", City: "+this.city+", State: "
                +this.state+", Zip: "+this.zip+", Phone: "+this.phone+", Email: "+this.email;
    }
}




    //incorrect first name:
    try{
        let contact2 = new Contact("aAAA","Lad","krantinagar,kundal","Sangli","MH","416309","8888310299","ladnilesh@gemail.com");
    }catch(e){
        console.error(e);
    }
    //incorrect address: 
    try{
        let contact2 = new Contact("Nilesh","Lad","2.2","Sangli","MH","416309","8888310299","ladnilesh@gemail.com");
    }catch(e){
        console.error(e);
    }
    //incorrect city: 
    try{
        let contact2 = new Contact("Nilesh","Lad","krantinagar,kundal","puney125","MH","416309","8888310299","ladnilesh@gemail.com");
    }catch(e){
        console.error(e);
    }
    //incorrect phone 
    try{
        let contact2 = new Contact("Nilesh","Lad","krantinagar,kundal","Sangli","MH","416309","888831029","ladnilesh@gemail.com");
    }catch(e){
        console.error(e);
    }
    //incorrect zip 
    try{
        let contact2 = new Contact("Nilesh","Lad","krantinagar,kundal","Sangli","MH","4163209","8888310299","ladnilesh@gemail.com");
    }catch(e){
        console.error(e);
    }
    //incorrect email
    try{
        let contact2 = new Contact("Nilesh","Lad","krantinagar,kundal","Sangli","MH","416309","8888310299","ladnilesh@gemailcom");
    }catch(e){
        console.error(e);
    }


   


//new address book 
let addressBookArray = new Array();
//pass by object value
let contact = new Contact("Nilesh","Lad","krantinagar,kundal","Sangli","MH","416309","8888310299","ladnilesh@gemail.com");
// console.log(contact.toString());

addContact(new Contact("Mark","Zuckerberg","Street 191","NewYork","New York","732106","11 6182755450","mark@email.com"));
addContact(new Contact("Bill","Gates","Street 250","Medina","Washington","723091","11 6817263541","bill@email.com"));
addContact(new Contact("Jeff","Bezos","Street 200","CityABC","Washington","772109","11 6385755850","jeff@email.com"));
addContact(new Contact("Mark","Gates","Street 199","NewYork","New York","722106","11 6182755777","markgates@email.com"));
addContact(new Contact("Bill","Bezos","Street 218","NewYork","New York","992106","11 6182755000","markgates@email.com"));
 console.log(addressBookArray.toString());


//UC4 USING ARROW FUNCTION 

    // let contactToEdit = addressBookArray.find(contact=>contact.firstName=="Jeff"&&contact.lastName=="Bezos");
    // if(contactToEdit!=undefined){
    //     contactToEdit.phone = "11 6123456789";
    //     console.log("\n Using arrow => function "+addressBookArray);
    // }
    // else 
    //     console.log("\n Contact not found");


//UC4 USING SEPARATE FUNCTION

    function editContact(contact){
        if (contact.firstName == "Jeff" && contact.lastName == "Bezos"){
            contact.phone = "11 6123456788";
            return contact;
        }
    }
    // contactToEdit = addressBookArray.find(editContact);
    // console.log("\nUsing separate function: "+addressBookArray);



//UC5 DELETE A CONTACT

    for(let i=0;i<addressBookArray.length;i++){
        if(addressBookArray[i].firstName=="Jeff"
            &&addressBookArray[i].lastName=="Bezos")
            delete addressBookArray[i];
    }
    // console.log("\nAddress Book Array After Deleting Contact: "+addressBookArray)


//UC6 NUMBER OF CONTACTS IN ADDRESS BOOK USING REDUCE IN SEPARATE FUNCTION{
    function totalContacts(totalContacts){
        return ++totalContacts;
    }
    console.log("\nTotal Contacts With reduce using separate function: "+addressBookArray.reduce(totalContacts,0)); 


//UC6 NUMBER OF CONTACTS IN ADDRESS BOOK USING ARROW FUNCTION TO REDUCE

    // console.log("Total Contacts With reduce using arrow => function: "+addressBookArray.reduce((totalContacts)=>++totalContacts,0));



//UC7 Add contact if not already present:
function addContact(newContact){
    let presentContact = addressBookArray.find(contact=>contact.firstName==newContact.firstName&&contact.lastName==newContact.lastName);
    if(presentContact==undefined){
        addressBookArray.push(newContact);
        console.log("Contact added");
    }
    else 
        console.log("Contact not added, already present: "+newContact.firstName+" "+newContact.lastName);
}

//Trying to add duplicate contact:
// addContact(new Contact("Mark","Zuckerberg","Street 191","NewYork","New York","732106","11 6182755450","mark@email.com"));
// console.log(addressBookArray.toString());


//UC 8 Search Person In a City Or State
function searchPersonInCity(firstName,city){
    return addressBookArray.find(contact=>contact.firstName==firstName&&contact.city==city);
}

function searchPersonInState(firstName,state){
    return addressBookArray.find(contact=>contact.firstName==firstName&&contact.state==state);
}
// console.log("Search Person in a city : "+searchPersonInCity("Mark","NewYork"));
// console.log("Search Person in a state : "+searchPersonInState("Mark","New York")); 


//UC9 View Persons By city or state
function viewPersonsByCityOrState(name,type){
    console.log("\nContacts in "+name+" "+type);
    if(type=="City")
        addressBookArray.filter(contact=>contact.city==name).forEach(contact=>process.stdout.write(contact.toString()));
    else if(type=="State")
        addressBookArray.filter(contact=>contact.state==name).forEach(contact=>process.stdout.write(contact.toString()));
    else 
        console.log("Invalid choice");
}
// viewPersonsByCityOrState("NewYork","City");
// viewPersonsByCityOrState("New York","State");


//UC10 Count persons by city or state
function countPersonsByCityOrState(name,type){
    let count = 0;
    if(type=="City")
        addressBookArray.filter(contact=>contact.city==name).forEach(contact=>++count);
    else if(type=="State")
        addressBookArray.filter(contact=>contact.state==name).forEach(contact=>++count);
    else 
        console.log("Invalid choice");
    return count;
}
// console.log("\n Number of contacts in NewYork City: "+countPersonsByCityOrState("NewYork","City"));
// console.log("Number of contacts in New York State: "+countPersonsByCityOrState("New York","State"));


//UC 11 Sort Entries alphabetically
function sortAddressBookBy(type){
    switch(type){
    case "name":
        return addressBookArray.slice().sort();
    case "city":
        return addressBookArray.slice().sort((a,b)=>(a.city).localeCompare(b.city));
    case "state":
        return addressBookArray.slice().sort((a,b)=>(a.state).localeCompare(b.state));
    case "zip":
        return addressBookArray.slice().sort((a,b)=>(a.zip).localeCompare(b.zip));
    }
    
}

// let sortedByName = sortAddressBookBy("name");
//     console.log("\nSorted address book by name:" +sortedByName.toString());
//     console.log("Sorted address book by city: "+sortAddressBookBy("city"));
//     console.log("Sorted address book by state: "+sortAddressBookBy("state"));
//     console.log("Sorted address book by zip: "+sortAddressBookBy("zip"));


    // To compute a number taken as input

    const prompt = require('prompt-sync')();
    console.log("1.To address book data");
    console.log("2.edite contact");
    console.log("3.new address book");
    console.log("4.serach person city and state");
    console.log("5.view Persons By City Or State");
    console.log("6.count Persons By City Or State");
    console.log("7.sort Address Book By person name, state, city");
    console.log("8.delete person");

    let number = Number(prompt("Enter the choices : "));

switch(number){
    case 1:
        console.log(addressBookArray.toString());
        break;
    case 2:
        contactToEdit = addressBookArray.find(editContact);
        console.log("\n Using separate function: "+addressBookArray);
        break;
    case 3:
        addContact(new Contact("Mark","Zuckerberg","Street 191","NewYork","New York","732106","11 6182755450","mark@email.com"));
        console.log(addressBookArray.toString());
        break;
    case 4:
        console.log("Search Person in a city : "+searchPersonInCity("Mark","NewYork"));
        console.log("Search Person in a state : "+searchPersonInState("Mark","New York")); 
        break;
    case 5:
        viewPersonsByCityOrState("NewYork","City");
        viewPersonsByCityOrState("New York","State");
        break;
    case 6:
        console.log("\n Number of contacts in NewYork City: "+countPersonsByCityOrState("NewYork","City"));
        console.log("Number of contacts in New York State: "+countPersonsByCityOrState("New York","State"));
        break;
    case 7:
        let sortedByName = sortAddressBookBy("name");
        let number1 = Number(prompt("Enter the choices to address book sort in \n1.name,\n2.city,\n3.state,\n4.zip,\nwhich one sort: "));

        switch(number1)
        {
            case 1:
                console.log("\nSorted address book by name:" +sortedByName.toString());
                break;
            case 2:
                 console.log("Sorted address book by city: "+sortAddressBookBy("city"));
                 break;
            case 3:
                console.log("Sorted address book by state: "+sortAddressBookBy("state"));
                break;
            case 4:
                 console.log("Sorted address book by zip: "+sortAddressBookBy("zip"));
                 break;
                 default:
        console.log("Invalid");

        }
        // console.log("\nSorted address book by name:" +sortedByName.toString());
        // console.log("Sorted address book by city: "+sortAddressBookBy("city"));
        // console.log("Sorted address book by state: "+sortAddressBookBy("state"));
        // console.log("Sorted address book by zip: "+sortAddressBookBy("zip"));
        break;   
        case 8:
        console.log("delete the jeff person ")
        console.log("\nAddress Book Array After Deleting Contact: "+addressBookArray)
        break;       
 
    default:
        console.log("Invalid");
    }
