package Practice

class Array {



  def Array1 (){
    val arr = Array(1, 2, 34, 5, 56, 66)

    for (i <- 0 to arr.length) {
      println(arr(i))
    }
  }
}

object MainObject{

  def main(){

    var a = new Array
    a.Array1

  }
}
