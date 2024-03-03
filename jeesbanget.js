const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

    optionImages.forEach((image, index) =>{
        image.addEventListener("click", (e) => {
            image.classList.add("active");

            optionImages.forEach((image2, index2)=> {
                index !== index2 && image2.classList.remove("active");
            });

            gameContainer.classList.add("start");
            
            let time = setTimeout(() =>{
                gameContainer.classList.remove("start");
                let imageSrc = e.target.querySelector("img").src;
                userResult.src = imageSrc;
    
                let randomNumber = Math.floor(Math.random() * 3);
                let cpuImages = ["Assets/batu.png", "Assets/gunting.png", "Assets/kertas.png"];
                cpuResult.src = cpuImages[randomNumber];
    
                let cpuValue = ["B", "K", "G"][randomNumber];
                let userValue = ["B", "K", "G"][index];
    
                let outComes = {
                    BB : "Draw",
                    BK : "User",
                    BG : "Cpu",
                    KK : "Draw",
                    KG : "User",
                    KB : "Cpu",    
                    GG : "Draw",
                    GB : "User",
                    GK : "Cpu",
                }
    
                let outComeValue = outComes[userValue + cpuValue];
                
                result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue}   Win!! `;
            },2000);

        });
    });