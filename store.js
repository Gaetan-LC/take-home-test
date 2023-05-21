export class DiscountOffer {
  constructor(partnerName, expiresIn, discountRateInPercent) {
    this.partnerName = partnerName;
    this.expiresIn = expiresIn;
    this.discountInPercent = discountRateInPercent;
  }
}

export class Store {
  constructor(discountOffers = []) {
    this.discountOffers = discountOffers;
  }
  updateDiscounts() {
    for (var i = 0; i < this.discountOffers.length; i++) {
      switch (this.discountOffers[i].partnerName){
        case "BackMarket" :
          this.discountOffers[i].expiresIn-=1;
          // If already expired and discount will not go under 0 :
          if (this.discountOffers[i].expiresIn<0 && this.discountOffers[i].discountInPercent>=4){
            // fast decrease
            this.discountOffers[i].discountInPercent-=4;
          }
          // If not expired and discount will not go under 0 :
          else if (this.discountOffers[i].discountInPercent>=2){
            //slow decrease
            this.discountOffers[i].discountInPercent-=2;
          }
          break;
        case "Naturalia" :
          this.discountOffers[i].expiresIn-=1;
          // If already expired and discount will not go over 50 :
          if (this.discountOffers[i].expiresIn<0 && this.discountOffers[i].discountInPercent<=48){
            // fast increase
            this.discountOffers[i].discountInPercent+=2;
          }
          // If not expired and discount will not go over 50 :
          else if (this.discountOffers[i].discountInPercent<=49){
            //slow decrease
            this.discountOffers[i].discountInPercent+=1;
          }
          break;
        case "Vinted" :
          this.discountOffers[i].expiresIn-=1;
          // If expired then no discount
          if (this.discountOffers[i].expiresIn<0){
            this.discountOffers[i].discountInPercent=0;
          }
          // If 5 days left and will not go over 50 then increase by 3
          else if(this.discountOffers[i].expiresIn<=5 && this.discountOffers[i].discountInPercent<=47){
            this.discountOffers[i].discountInPercent+=3;
          }
          // If 10 days left and will not go over 50 then increase by 2
          else if(this.discountOffers[i].expiresIn<=10 && this.discountOffers[i].discountInPercent<=48){
            this.discountOffers[i].discountInPercent+=2;
          }
          // If more than 10 days left and will not go over 50 then increase by 1
          else if(this.discountOffers[i].discountInPercent<=49){
            this.discountOffers[i].discountInPercent+=1;
          }
          break;
        case "Ilek" :
          // Nothing changes
          break;
        default :
          this.discountOffers[i].expiresIn-=1;
          // If already expired and discount will not go under 0 :
          if (this.discountOffers[i].expiresIn<0 && this.discountOffers[i].discountInPercent>=2){
            // fast decrease
            this.discountOffers[i].discountInPercent-=2;
          }
          // If not expired and discount will not go under 0 :
          else if (this.discountOffers[i].discountInPercent>=1){
            //slow decrease
            this.discountOffers[i].discountInPercent-=1;
          }
      }
    }
    return this.discountOffers;
  }
}
