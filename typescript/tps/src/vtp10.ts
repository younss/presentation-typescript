/**
 * les interfaces ,classes, enum et Generique
 */
var tp10Container = document.getElementById("tp10_result");
var result = "";

enum RiskTypeEnum {
    CAR, HOME
}
interface Risk {
    type: RiskTypeEnum;
    premium: number;

}

class Policy {
    policyNumber: string;
    risks?: Risk[];
    startDate: Date;
    endDate: Date;
    amount?: number;
}

class HomePolicy extends Policy{
    constructor( public policyNumber: string,   public startDate: Date, public endDate: Date, public address: string, 
            publicrisks?: Risk[], public amount?: number ){
        super();
    }
}
function sortByEndDateDesc(policies: Policy[]) {
    return policies.sort((x, y) => x.endDate >= y.endDate ? 1 : -1);
}


let policies:Array<Policy>= sortByEndDateDesc([{ policyNumber: "A00-00001", startDate: new Date(2014, 10, 1), endDate: new Date(2015, 10, 1) },
new HomePolicy("H00-00001", new Date(2015, 10, 1), new Date(2016, 10, 1), "MTL",undefined,500.25)])

if(policies){
    policies.forEach((pol)=>{result+= `${JSON.stringify(pol)}<br>`})
}

//tp10Container.innerHTML= result;