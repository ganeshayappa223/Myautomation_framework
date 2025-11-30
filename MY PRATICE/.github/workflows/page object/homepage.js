
class homepage {

constructor(page){

this.page =page;

this.product =page.getbyrole('button',{name:'Products'});

}
async clickproduct(){

await this.product.click();

}





}