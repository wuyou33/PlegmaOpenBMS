## Introduction##

We are witnessing the beginning of the IoT revolution. We use smartphones, numerous gadgets and sensors in our everyday life, providing us with unimaginable information, insights and benefits. We have smart phones, smart wearables, smart cars, smart almost everything; yet buildings remain “dumb” especially in reference to energy efficiency. 
Enterprises today more than ever require detailed monitoring and control of their buildings energy usage in their attempt to optimize energy efficiency and meet specified efficiency standards. However, traditional approaches (by large OEMs) most often do not make economic sense, especially for small enterprises, as overall cost often surpasses even medium-to-long term potential energy savings, while also do not provide future proof solutions and lock in clients in their product range. Consequently in the EU and US, market penetration of BEMS in commercial buildings is only **0.2%**
We consider this an important business opportunity which can be addressed with a cost-efficient fully open-source approach, transforming the way traditional BEMS technology is installed and used, but also changing the business model of the BEMS industry from CAPEX-intense & licence based to a reasonable subscription/services OPEX model.  We envision an open-source BEMS that can become "**wordpress for buildings**" and develop an ecosystem around it of small companies / freelancers who will deploy and maintain it for their customers. 

##Plegma OpenBMS##
![](https://raw.githubusercontent.com/wiki/ellak-monades-aristeias/PlegmaOpenBMS/screenshot.png)

Our Building Energy Monitoring System is based on a popular smart-home/IoT integration platform known as [OpenHab](http://openhab.org) which is developed in Java/OSGi technology and is designed to be absolutely vendor-neutral as well as hardware/protocol agnostic. We have developed additional modules (bindings) in order to extent the functionality of OpenHab towards a Building Energy Monitoring System.  [Please visit our Wiki for more details.](https://github.com/ellak-monades-aristeias/PlegmaOpenBMS/wiki)


##BigData Analytics open-source cloud backend##

Lets assume you have lots of buidlings to manage, hence lots of PlegmaOpenBMS instances. You obviously need a backend server to collect all sensor data and idealy be able to control all available devices/hardware in realtime. Obviously the solution should be scalable (i.e. big data) as you will soon have millions/billions of sensor data records per day, and ideally it should not require a "new datacenter" for every client, so a multi-tenancy approach is required to save on cloud resources and deployment/maintenance overheads.  **[SiteWhere.org](http://www.sitewhere.org/) is an opensource project that can do exactly that.** Here are our instructions on how to [integrate PlegmaOpenBMS with SiteWhere](sitewhere.md) and also create a quick visual frontend based on [SlamData](http://slamdata.com/)

## License##
All source code is under Eclipse Public License (EPL). Wiki and readme files are CC-BY-SA 4.0 

## About##
Most of the work has been perfomed by [Manolis Nikiforakis](http://linkedin.com/in/mnikiforakis) and [Yiannis Gkoufas](https://gr.linkedin.com/pub/yiannis-gkoufas/18/217/712).


##For Developers##
https://github.com/ellak-monades-aristeias/PlegmaOpenBMS/wiki

##For Users##
Read the introduction, visit [openhab.org](http://www.openhab.org/) then come back! :-)

##Deliverables##
 1. [Plegma user interface](https://github.com/ellak-monades-aristeias/PlegmaOpenBMS/wiki/PlegmaOpenBMS-User-Interface)
 2. Binders-modules
	 a. https://github.com/ellak-monades-aristeias/PlegmaOpenBMS/wiki/sunnywebbox-binding
	 b. https://github.com/ellak-monades-aristeias/PlegmaOpenBMS/wiki/plugwise-binding
	 c. https://github.com/ellak-monades-aristeias/PlegmaOpenBMS/wiki/janitza-binding
 3. [Cloud based IoT backend](https://github.com/ellak-monades-aristeias/PlegmaOpenBMS/blob/clean/sitewhere.md)
 4. [Recommended hardware and instructions](https://github.com/ellak-monades-aristeias/PlegmaOpenBMS/wiki/bbg)