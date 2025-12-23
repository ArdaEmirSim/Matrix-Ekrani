let hizDegeri = document.getElementById("hizDegeri")
        let inputHiz = document.getElementById("inputHiz")
        hizDegeri.textContent = inputHiz.value
        let gecikme = 30
        inputHiz.addEventListener("input", (event) => {
            hizDegeri.textContent = inputHiz.value
            gecikme = 100-inputHiz.value
            if (gecikmefonks) {
                clearInterval(gecikmefonks)
            }
            gecikmefonks = setInterval(draw, gecikme)




        })
        let inputRenk = document.getElementById("inputRenk")
        var renk = "#0f0";
        inputRenk.addEventListener("input", (event) => {
            renk = inputRenk.value
        })
        let canvas = document.getElementById("matrix");
        let ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth * 5 / 6;
        canvas.height = window.innerHeight;

        let letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let fontSize = 16;
        let columns = Math.floor(canvas.width / fontSize);
        let drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.ceil(Math.random() * -100);
        }
        function draw() {
            ctx.fillStyle = "rgba(0,0,0,0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = renk;
            ctx.font = fontSize + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        console.log(gecikme)
        let gecikmefonks = setInterval(draw, gecikme)
        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            columns = Math.floor(canvas.width / fontSize);
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = Math.ceil(Math.random() * -100);
            }


        })