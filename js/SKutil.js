function addValidation()
{
    var name = document.getElementById("SKName").value;
    var type = document.getElementById("SKSelectType").value;
    var damage = document.getElementById("SKDamage").value;
    var rate = document.getElementById("SKRate").value;
    var speed = document.getElementById("SKSpeed").value;
    var reload = document.getElementById("SKReload").value;
    var range = document.getElementById("SKRange").value;
    var impact = document.getElementById("SKImpact").value;
    var errorNotExist = true;

    document.getElementById("SKName").className = "";
    document.getElementById("SKDamage").className = "";
    document.getElementById("SKRate").className = "";
    document.getElementById("SKSpeed").className = "";
    document.getElementById("SKReload").className = "";
    document.getElementById("SKRange").className = "";
    document.getElementById("SKImpact").className = "";

    document.getElementById("SKNameError").innerText = "";
    document.getElementById("SKDamageError").innerText = "";
    document.getElementById("SKRateError").innerText = "";
    document.getElementById("SKSpeedError").innerText = "";
    document.getElementById("SKReloadError").innerText = "";
    document.getElementById("SKRangeError").innerText = "";
    document.getElementById("SKImpactError").innerText = "";


    if (name == "" || name == null)
    {
        document.getElementById("SKName").className = "error";
        document.getElementById("SKNameError").innerText = "Weapon name required!";
        errorNotExist = false;
    }

    if (damage == "" || damage == null)
    {
        document.getElementById("SKDamage").className = "error";
        document.getElementById("SKDamageError").innerText = "Damage required!";
        errorNotExist = false;
    }

    else
    {
        if (isNaN(damage))
        {
            document.getElementById("SKDamage").className = "error";
            document.getElementById("SKDamageError").innerText = "Damage must be number!";
            errorNotExist = false;
        }
    
        else
        {
            if (damage > 100 || damage < 0)
            {
                document.getElementById("SKDamage").className = "error";
                document.getElementById("SKDamageError").innerText = "Damage must be 0 - 100!";
                errorNotExist = false;
            }
        }
    }

    if (rate == "" || rate == null)
    {
        document.getElementById("SKRate").className = "error";
        document.getElementById("SKRateError").innerText = "Rate of fire required!";
        errorNotExist = false;
    }

    else
    {
        if (isNaN(rate))
        {
            document.getElementById("SKRate").className = "error";
            document.getElementById("SKRateError").innerText = "Rate of fire must be number!";
            errorNotExist = false;
        }
    }

    if (speed == "" || speed == null)
    {
        document.getElementById("SKSpeed").className = "error";
        document.getElementById("SKSpeedError").innerText = "Bullet Spped required!";
        errorNotExist = false;
    }

    else
    {
        if (isNaN(speed))
        {
            document.getElementById("SKSpeed").className = "error";
            document.getElementById("SKSpeedError").innerText = "Bullet speed must be number!";
            errorNotExist = false;
        }
    }

    if (reload == "" || reload == null)
    {
        document.getElementById("SKReload").className = "error";
        document.getElementById("SKReloadError").innerText = "Reload Duration required!";
        errorNotExist = false;
    }

    else
    {
        if (isNaN(reload))
        {
            document.getElementById("SKReload").className = "error";
            document.getElementById("SKReloadError").innerText = "Reload duration must be number!";
            errorNotExist = false;
        }
    }

    if (range == "" || range == null)
    {
        document.getElementById("SKRange").className = "error";
        document.getElementById("SKRangeError").innerText = "Range required!";
        errorNotExist = false;
    }

    else
    {
        if (isNaN(range))
        {
            document.getElementById("SKRange").className = "error";
            document.getElementById("SKRangeError").innerText = "Range must be number!";
            errorNotExist = false;
        }
    }

    if (impact == "" || impact == null)
    {
        document.getElementById("SKImpact").className = "error";
        document.getElementById("SKImpactError").innerText = "Body hit impact required!";
        errorNotExist = false;
    }

    else
    {
        if (isNaN(impact))
        {
            document.getElementById("SKImpact").className = "error";
            document.getElementById("SKImpactError").innerText = "Body hit impact must be number!";
            errorNotExist = false;
        }
    }

    return errorNotExist;
}

function editValidation()
{
    var name = document.getElementById("SKNameEdit").value;
    var type = document.getElementById("SKSelectTypeEdit").value;
    var damage = document.getElementById("SKDamageEdit").value;
    var rate = document.getElementById("SKRateEdit").value;
    var speed = document.getElementById("SKSpeedEdit").value;
    var reload = document.getElementById("SKReloadEdit").value;
    var range = document.getElementById("SKRangeEdit").value;
    var impact = document.getElementById("SKImpactEdit").value;
    var errorNotExist = true;

    document.getElementById("SKNameEdit").className = "";
    document.getElementById("SKDamageEdit").className = "";
    document.getElementById("SKRateEdit").className = "";
    document.getElementById("SKSpeedEdit").className = "";
    document.getElementById("SKReloadEdit").className = "";
    document.getElementById("SKRangeEdit").className = "";
    document.getElementById("SKImpactEdit").className = "";

    document.getElementById("SKNameErrorEdit").innerText = "";
    document.getElementById("SKDamageErrorEdit").innerText = "";
    document.getElementById("SKRateErrorEdit").innerText = "";
    document.getElementById("SKSpeedErrorEdit").innerText = "";
    document.getElementById("SKReloadErrorEdit").innerText = "";
    document.getElementById("SKRangeErrorEdit").innerText = "";
    document.getElementById("SKImpactErrorEdit").innerText = "";


    if (name == "" || name == null)
    {
        document.getElementById("SKNameEdit").className = "error";
        document.getElementById("SKNameErrorEdit").innerText = "Weapon name required!";
        errorNotExist = false;
    }

    if (damage == "" || damage == null)
    {
        document.getElementById("SKDamageEdit").className = "error";
        document.getElementById("SKDamageErrorEdit").innerText = "Damage required!";
        errorNotExist = false;
    }

    else
    {
        if (isNaN(damage))
        {
            document.getElementById("SKDamageEdit").className = "error";
            document.getElementById("SKDamageErrorEdit").innerText = "Damage must be number!";
            errorNotExist = false;
        }
    
        else
        {
            if (damage > 100 || damage < 0)
            {
                document.getElementById("SKDamageEdit").className = "error";
                document.getElementById("SKDamageErrorEdit").innerText = "Damage must be 0 - 100!";
                errorNotExist = false;
            }
        }
    }

    if (rate == "" || rate == null)
    {
        document.getElementById("SKRateEdit").className = "error";
        document.getElementById("SKRateErrorEdit").innerText = "Weapon name required!";
        errorNotExist = false;
    }

    else
    {
        if (isNaN(rate))
        {
            document.getElementById("SKRateEdit").className = "error";
            document.getElementById("SKRateErrorEdit").innerText = "Rate of fire must be number!";
            errorNotExist = false;
        }
    }

    if (speed == "" || speed == null)
    {
        document.getElementById("SKSpeedEdit").className = "error";
        document.getElementById("SKSpeedErrorEdit").innerText = "Weapon name required!";
        errorNotExist = false;
    }

    else
    {
        if (isNaN(speed))
        {
            document.getElementById("SKSpeedEdit").className = "error";
            document.getElementById("SKSpeedErrorEdit").innerText = "Bullet speed must be number!";
            errorNotExist = false;
        }
    }

    if (reload == "" || reload == null)
    {
        document.getElementById("SKReloadEdit").className = "error";
        document.getElementById("SKReloadErrorEdit").innerText = "Weapon name required!";
        errorNotExist = false;
    }

    else
    {
        if (isNaN(reload))
        {
            document.getElementById("SKReloadEdit").className = "error";
            document.getElementById("SKReloadErrorEdit").innerText = "Reload duration must be number!";
            errorNotExist = false;
        }
    }

    if (range == "" || range == null)
    {
        document.getElementById("SKRangeEdit").className = "error";
        document.getElementById("SKRangeErrorEdit").innerText = "Weapon name required!";
        errorNotExist = false;
    }

    else
    {
        if (isNaN(range))
        {
            document.getElementById("SKRangeEdit").className = "error";
            document.getElementById("SKRangeErrorEdit").innerText = "Range must be number!";
            errorNotExist = false;
        }
    }

    if (impact == "" || impact == null)
    {
        document.getElementById("SKImpactEdit").className = "error";
        document.getElementById("SKImpactErrorEdit").innerText = "Weapon name required!";
        errorNotExist = false;
    }

    else
    {
        if (isNaN(impact))
        {
            document.getElementById("SKImpactEdit").className = "error";
            document.getElementById("SKImpactErrorEdit").innerText = "Body hit impact must be number!";
            errorNotExist = false;
        }
    }

    return errorNotExist;
}

function userNameValidation()
{
    var name = document.getElementById("SKUserName").value;
    var lat = document.getElementById("SKLat").value;
    var long = document.getElementById("SKLong").value;
    var errorNotExist = true;

    document.getElementById("SKUserName").className = "";
    document.getElementById("SKUserNameError").innerText = "";

    if(name == "" || name == null)
    {
        document.getElementById("SKUserName").className = "error";
        document.getElementById("SKUserNameError").innerText = "User name required!";
        errorNotExist = false;
    }

    if (lat == "" || lat == null)
    {
        errorNotExist = false;
        alert("Error occured while getting the location");
    }

    if (long == "" || long == null)
    {
        errorNotExist = false;
        alert("Error occured while getting the location");
    }

    return errorNotExist;

}