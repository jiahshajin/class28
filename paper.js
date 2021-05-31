 class Paper{
     constructor(x,y,r){
        var options={
         isStatic:false,
        restitution:0.3,
         friction:0.5,
         density:1.2
       }
       this.r=r
       this.image=loadImage('images/paper.png')
       this.body=Bodies.circle(x,y,r,options)
       World.add(world,this.body)
      } 

      display(){
         var pos=this.body.position;
         //fill(254,0,253)
        // ellipse(pos.x,pos.y )
         //imageMode(CENTER)
         image(this.image,200,80,70,70)
      }
   }

     
     
     
 
