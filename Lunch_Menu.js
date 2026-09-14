const lunches = [];

function addLunchToEnd(lunchEd, itemEd){
  lunchEd.push(itemEd);

  console.log(`${itemEd} added to the end of the lunch menu.`)
  return lunchEd;
}

function addLunchToStart(lunchSt, itemSt){
  lunchSt.unshift(itemSt);

  console.log(`${itemSt} added to the start of the lunch menu.`)
  return lunchSt;
}

function removeLastLunch(rmLunchEd){
   if(rmLunchEd.length != 0){
    const item = rmLunchEd.pop();

    console.log(`${item} removed from the end of the lunch menu.`);
   }else{
    console.log(`No lunches to remove.`);
   }
   return rmLunchEd;
}

function removeFirstLunch(rmLunchSt){
  if(rmLunchSt.length != 0){
    const item = rmLunchSt.shift();

    console.log(`${item} removed from the start of the lunch menu.`);
   }else{
    console.log(`No lunches to remove.`);
   }
   return rmLunchSt;
}

function getRandomLunch(lunchRan){
  if(lunchRan.length != 0){
    const min = 0;
    const max = lunchRan.length - 1;

    const rand = Math.floor(Math.random() * (max - min + 1) + min)

    const item = lunchRan[rand];
    console.log(`Randomly selected lunch: ${item}`);
  }else{
    console.log(`No lunches available.`);
  }
}

function showLunchMenu(lunchMen){
  if(lunchMen != 0){
    console.log(`Menu items: ${lunchMen.join(", ")}`)
  }else{
    console.log(`The menu is empty.`);
  }
}

showLunchMenu(["Greens", "Corns", "Beans"])