const { kafka } = require("./client");

async function init(){
    const admin = kafka.admin();
    console.log("Admin connecting...");
    admin.connect();
    console.log("Admin connected")

    console.log("creating topics [orders]")
    await admin.createTopics({
        topics:[
            {
                topic:"orders",
                numPartitions:2
            }
        ]
    })
    console.log("Topic created [orders]")


    console.log("disconnecting admin")
    await admin.disconnect()
    console.log("admin disconnected")
}

init()