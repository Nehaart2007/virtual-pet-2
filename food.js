display()
{

    var x=80,y=100

    imageMode(CENTER);
    image(this.Milk.png,720,220,70,70);

    if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++) {
      if(i%10==0) {
x=80;
y=y+50;
      }   
      } 
    }
    image(this.Milk.png,x,y,50,50);
}