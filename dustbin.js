  class Dustbin {
      constructor(x,y,width,height){
      var options={
        isStatic:true,
        restitution:0.1
       

      }
      this.image=loadImage('images/dustbin.png')
      this.body=Bodies.rectangle(x,y,width,height,options)
      this.width=width;
      this.height=height;
      World.add(world,this.body)

    }
  

    display(){
      var pos=this.body.position;
      fill(200)
     rect(pos.x,pos.y,this.width,this.height)
     image(this.image,1260,165,210,190);
    }

  }



  


