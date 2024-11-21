import milliseconds from "mocha/lib/ms";

export default class Register {
    
    fName:any = undefined;
    lname:any = undefined
    email:any =  undefined;
    telephone:any = undefined;
    password:any = undefined;
    cpassword:any = undefined;
    

        
    constructor() {
       this.fName = '#input-firstname';
       this.lname = '#input-lastname';
       this.email = '#input-email';
       this.telephone = '#input-telephone';

       this.password = '#input-password';
       this.cpassword = '#input-confirm';

    }

    async launch() {
       cy.visit('https://awesomeqa.com/ui/index.php?route=account/register');
    }

    async registerUser(fname:string,lname:string,email:string,
        telephone:string,password:string,cpassword:string) {
        cy.get(this.fName).type(fname);
        cy.get(this.lname).type(lname);
        cy.get(this.email).type(email);
        cy.get(this.telephone).type(telephone);

        cy.get(this.password).type(password);
        cy.get(this.cpassword).type(cpassword);
    }

    async selectSubmitButton () {
         cy.get("input[name='agree']").check();
         cy.get("input[value='Continue']").click();
         cy.wait(5000);
    }
}
