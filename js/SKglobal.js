function pageWeapons_show()
{
    SKGetWeaponsPage();
}

function pageDetail_show()
{
    SKShowCurrentWeapon();
}

function map_show()
{
    SKGetCurrentLocation();
}

function init()
{
    $("#SKViewWeaponsPage").on("pageshow", pageWeapons_show);
    $("#SKEditWeaponPage").on("pageshow", pageDetail_show);
    $("#SKLocationPage").on("pageshow", map_show);
}

function initDB(){
    try{
        DB.SKCreateDatabase();
        if (db) {
            console.info("Creating Tables...");
            DB.SKCreateTables();
        }
        else{
            console.error("Error: Cannot create tables: Database does not exist!");
        }
    } catch(e){
        console.error("Error: (Fatal) Error in initDB(). Can not proceed.");
    }  
}

$(document).ready(function () {
    init();
    initDB();
    SKUpdateDropdowns();
    SKUpdateDropdownsEdit();
});
