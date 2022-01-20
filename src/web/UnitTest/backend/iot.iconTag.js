//IoT Scanner
//This agi script will list the manager cached device list. If the list not exists
//It will perform an auto scan instead.

//Require the iot lib
requirelib("iot");

function main(){
	//Check if the IoT Controller is ready
	if (iot.ready() == true){
		//List the iot device in cache
		var deviceList = iot.list();
		
		if (deviceList.length == 0){
			sendResp("No iot device found");
			return;
		}

		//Get the icon of the first device
		var iconTagName = iot.iconTag(deviceList[0].DeviceUUID);
		sendResp("Tag icon for this device is: " + iconTagName + "\n" + "Icon image file can be found in SystemAO/iot/hub/img/devices/" + iconTagName + ".png" );

	}else{
		sendResp("IoT Manager not ready");
	}
}

//Run the main function
main();
