let data = [
    {
        id: 1,
        question: "What types of robots and drones do you offer?",
        answer: "We offer a wide range of robots and drones tailored for various industries, including industrial robots for manufacturing, aerial drones for surveillance, and autonomous ground robots for logistics."
    },
    {
        id: 2,
        question: "How can your robots improve our operations?",
        answer: "Our robots can streamline processes, increase efficiency, and reduce costs by automating tasks such as assembly, inspection, inventory management, and surveillance."
    },
    {
        id: 3,
        question: "Do you provide customization options for your robots and drones?",
        answer: "Yes, we offer customization services to meet specific requirements and integrate our robots seamlessly into your existing workflows."
    },
    {
        id: 4,
        question: "What industries can benefit from your robots and drones?",
        answer: "Our robots and drones are suitable for a wide range of industries, including manufacturing, logistics, agriculture, construction, security, and more."
    },
    {
        id: 5,
        question: "What kind of training and support do you provide for using your robots and drones?",
        answer: "We offer comprehensive training programs and ongoing technical support to ensure that your team can effectively operate and maintain our robots and drones."
    },
    {
        id: 6,
        question: "Are your robots and drones equipped with advanced safety features?",
        answer: "Yes, safety is a top priority for us. Our robots and drones are equipped with advanced sensors, collision detection systems, and fail-safe mechanisms to ensure safe operation in various environments."
    },
    {
        id: 7,
        question: "How do your robots and drones handle navigation and obstacle avoidance?",
        answer: "Our robots and drones utilize state-of-the-art navigation algorithms and sensors such as LiDAR, GPS, and cameras to navigate autonomously and avoid obstacles in real-time."
    },
    {
        id: 8,
        question: "Can your drones be used for aerial mapping and surveying?",
        answer: "Yes, our drones are equipped with high-resolution cameras and mapping software, making them ideal for aerial mapping, surveying, and inspection tasks."
    },
    {
        id: 9,
        question: "What is the maximum payload capacity of your drones?",
        answer: "Our drones come in various sizes and configurations with different payload capacities, ranging from lightweight cameras for surveillance to heavy-duty equipment for payload delivery."
    },
    {
        id: 10,
        question: "How long can your drones fly on a single charge?",
        answer: "Flight times vary depending on the drone model and payload. However, our drones are designed for long flight times, with some models capable of flying for several hours on a single charge."
    },
    {
        id: 11,
        question: "Do your robots and drones require specialized maintenance?",
        answer: "Our robots and drones are designed for reliability and ease of maintenance. We provide maintenance schedules and guidelines to ensure optimal performance and longevity."
    },
    {
        id: 12,
        question: "Can your robots be integrated with existing automation systems?",
        answer: "Yes, our robots are compatible with various automation systems and can be seamlessly integrated into your existing infrastructure for enhanced efficiency and productivity."
    },
    {
        id: 13,
        question: "Do you offer warranty coverage for your robots and drones?",
        answer: "Yes, we offer warranty coverage for our robots and drones to protect against defects in materials and workmanship. Extended warranty options are also available."
    },
    {
        id: 14,
        question: "What kind of control options do you offer for operating your robots and drones?",
        answer: "We offer various control options, including manual control via remote controllers, semi-autonomous modes with user input, and fully autonomous operation based on pre-programmed missions or AI algorithms."
    },
    {
        id: 15,
        question: "How do I get started with integrating your robots and drones into my operations?",
        answer: "Simply contact us to discuss your specific requirements and goals. Our team of experts will work with you to assess your needs, recommend the best solutions, and provide support every step of the way."
    }
];


function defaulttext(){
    let c = document.getElementById("suggestion");
    if(c.innerHTML === ""){
        let p = document.createElement("p");
        p.innerText = "IF you Dont Get What want feel free to mail as on abc@gmail.com ";
        c.append(p);
    }
}

defaulttext();


let input = document.getElementById("searchbar");
let show = []

input.addEventListener('input', search);

function search() {
    show = [];

    // Your search logic goes here
    sinput =input.value.toLowerCase()
    data.map(elem => {
        let q = elem.question.toLowerCase()
        if(q.includes(sinput) && sinput !== ""){
            show.push(elem)
        }
        else{

        }
    })
    let container = document.getElementById("suggestion");
    container.innerHTML = null;
    
    show.map(elem =>{
        let btn = document.createElement("button");
        btn.innerText = elem.question;
        container.append(btn);
        btn.addEventListener("click", function() {
            container.innerHTML = null
            // Your onclick function logic goes here
            let para =document.createElement("p")
            para.innerText = elem.answer;
            container.append(para);

        });
    
        
        

    })
    defaulttext();
}









