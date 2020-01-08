function SKUpdateDropdowns()
{
    selectRow("SELECT * FROM type;", function(pleaseWork) {
    
    for (var i = 0; i < pleaseWork.length; i++)
    {
        var table = document.getElementById("SKSelectType");
        var option = document.createElement('option');
        table.appendChild(option);
        option.appendChild(document.createTextNode(pleaseWork[i].name));
        option.value = i;
    }       
    });

    selectRow("SELECT * FROM bullet;", function(pleaseWork) {
    
        for (var i = 0; i < pleaseWork.length; i++)
        {
            var table = document.getElementById("SKSelectBullet");
            var option = document.createElement('option');
            table.appendChild(option);
            option.appendChild(document.createTextNode(pleaseWork[i].name));
            option.value = i;
        }       
        });
}

function SKUpdateDropdownsEdit()
{
    selectRow("SELECT * FROM type;", function(pleaseWork) {
    
    for (var i = 0; i < pleaseWork.length; i++)
    {
        var tableEdit = document.getElementById("SKSelectTypeEdit");
        var optionEdit = document.createElement('option');
        tableEdit.appendChild(optionEdit);
        optionEdit.appendChild(document.createTextNode(pleaseWork[i].name));
        optionEdit.value = i;
    }       
    });

    selectRow("SELECT * FROM bullet;", function(pleaseWork) {
    
        for (var i = 0; i < pleaseWork.length; i++)
        {
            var tableEdit = document.getElementById("SKSelectBulletEdit");
            var optionEdit = document.createElement('option');
            tableEdit.appendChild(optionEdit);
            optionEdit.appendChild(document.createTextNode(pleaseWork[i].name));
            optionEdit.value = i;
        }       
        });
}

function SKAddFeedback()
{
    if (addValidation())
    {
        var name = document.getElementById("SKName").value;
        var type = document.getElementById("SKSelectType").value;
        var bulletId = document.getElementById("SKSelectBullet").value;
        var damage = document.getElementById("SKDamage").value;
        var rate = document.getElementById("SKRate").value;
        var speed = document.getElementById("SKSpeed").value;
        var reload = document.getElementById("SKReload").value;
        var range = document.getElementById("SKRange").value;
        var impact = document.getElementById("SKImpact").value;        
        
        var options = [name, type, bulletId, damage, rate, speed, reload, range, impact];
        
        function callback() 
        {
            console.info("Success: Record inserted successfully");
            alert("New Weapon Added!");
        }
        
        Weapon.insert(options, callback);

        document.getElementById("SKName").value = "";
        document.getElementById("SKDamage").value = "";
        document.getElementById("SKRate").value = "";
        document.getElementById("SKSpeed").value = "";
        document.getElementById("SKReload").value = "";
        document.getElementById("SKRange").value = "";
        document.getElementById("SKImpact").value = "";   
    }

    else 
    {
        console.error("Form is not valid");
    }

    return false;
}

function SKUpdateFeedback()
{
    if (editValidation())
    {
        var id = localStorage.getItem("id");
        var name = document.getElementById("SKNameEdit").value;
        var type = document.getElementById("SKSelectTypeEdit").value;
        var bulletId = document.getElementById("SKSelectBulletEdit").value;
        var damage = document.getElementById("SKDamageEdit").value;
        var rate = document.getElementById("SKRateEdit").value;
        var speed = document.getElementById("SKSpeedEdit").value;
        var reload = document.getElementById("SKReloadEdit").value;
        var range = document.getElementById("SKRangeEdit").value;
        var impact = document.getElementById("SKImpactEdit").value;  
        
        //call DAL function to insert the
        var options = [name, type, bulletId, damage, rate, speed, reload, range, impact, id];
        
        function callback() 
        {
            alert("Weapon Updated!");
        }
        
        Weapon.update(options, callback);
        
        $(location).prop('href', '#SKViewWeaponsPage');
    }

    else 
    {
        console.error("Form is not valid");
    }

    return false;
}

function SKAddUser()
{
    if (userNameValidation())
    {
        var name = document.getElementById("SKUserName").value;
        var lat = document.getElementById("SKLat").value
        var long = document.getElementById("SKLong").value

        var options = [name, lat, long];
        
        function callback() 
        {
            console.info("Success: Record inserted successfully");
            alert("New User Added!");
        }

        document.getElementById("SKUserName").value = "";
        
        Location.insert(options, callback);
    }

    return false;
}

function SKGetWeaponsPage()
{
    var options = [];

    function callback(tx, results) {

        var htmlCode = "";

        for (var i = 0; i < results.rows.length; i++) {

            // both will work
            // var row = results.rows.item(i);
            var row = results.rows[i];

            htmlCode += "<li><a data-role='button' data-row-id=" + row['id'] + " href='#'>" +
                "<h1>Weapon Name: " + row['weaponName'] + "</h1>" +
                "</a></li>";
        }

        var lv = $("#SKTemplateData");

        lv = lv.html(htmlCode);
        lv.listview("refresh"); // very important
        //attach event handler for each list items
        $("#SKTemplateData a").on("click", clickHandler);

        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));

            //navigate to the detail page automatically
            //both will work.
            $(location).prop('href', '#SKEditWeaponPage');
            // $.mobile.changePage("#pageDetail", {transition: 'none'});
        }

    }

    Weapon.selectAll(options, callback);
}

function SKShowCurrentWeapon()
{
    // var id = $("#txtId").val();
    var id = localStorage.getItem("id");

    var options = [id];

    function callback(tx, results) {
        var row = results.rows[0];

        $("#SKNameEdit").val(row['weaponName']);
        $("#SKSelectTypeEdit").val(row['typeId']);
        $("#SKDamageEdit").val(row['damage']);
        $("#SKRateEdit").val(row['rateOfFire']);
        $("#SKSpeedEdit").val(row['bulletSpeed']);
        $("#SKReloadEdit").val(row['reloadDuration']);
        $("#SKRangeEdit").val(row['range']);
        $("#SKImpactEdit").val(row['bodyHitImpact']);
    }
    
    Weapon.select(options, callback);
}

function SKDeleteFeedback() {
    // var id = $("#txtId").val();
    var id = localStorage.getItem("id");
    var options = [id];

    function callback() {
        alert("Weapon Deleted!");
        $(location).prop('href', '#SKViewWeaponsPage');
    }

    Weapon.delete(options, callback);
}

function SKClearDatabase() {
    var result = confirm("Really want to clear database?");
    if (result) {
        try {
            DB.dropTables();
            alert("Database cleared!");
        } catch (e) {
            alert(e);
        }
    }
}

function SKCancel(){
    $(location).prop('href', '#SKViewWeaponsPage');
}