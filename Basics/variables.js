console.log("Satyam");
const AccountId = 54658;
let AccountName = "Satyam Sharma";
var AccountDescription = "Owner Account";
AccountStatus = "open";
let AccountIndustry;

/*
prefer not to use using var
Because of issue in Block Scope and Functional Scope
*/

// Never define a storage without using const or let // Not allowed

console.table([AccountId,AccountName,AccountDescription, AccountIndustry]);

/*
    { } ---> this use to called scope in java.
*/
