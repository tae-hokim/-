        ////////////////////////////온클릭 방법///////////////////////////////
        function getToken(){
            console.log("aaa")
            const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0");
            console.log(token)
            document.getElementById("inputText").value = token;
        }



        


        //////////////////이벤트리스너 활용//////////////////////////////////
        // const sendbtn = document.querySelector("#sendBtn");

        // sendbtn.addEventListener("click",function(){

        //     document.querySelector("#inputText").value = String(Math.floor(Math.random()*1000000)).padStart(6,"0");

        //     console.log(inputText);
        // })


        ////////////////////화살표 함수//////////////////////////////
        // const sendbtn = document.querySelector("#sendBtn");

        // sendbtn.addEventListener("click", () => {

        //     document.querySelector("#inputText").value = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");

        //     console.log(inputText);
        // })

