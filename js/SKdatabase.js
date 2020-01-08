var db;

function errorHandler(tx, error){
    console.error("SQL error: " + tx + " (" + error.code + ") : " + error.message);
}

var DB = {
    SKCreateDatabase: function(){
        var shortName= "SKWeaponDB";
        var version = "1.0";
        var displayName = "DB for SKWeapon app";
        var dbSize = 2 * 1024 * 1024;

        console.info("Creating Database ...");
        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);

        function dbCreateSuccess(){
            console.info("Success: Database created successfully.");
        }
    },
    SKCreateTables: function(){

        function dropType(tx){
            var sql1 = "DROP TABLE IF EXISTS type;";
            var options1 = [];
            
            function successDrop() {
                console.info("Success: type table dropped successfully");
            }
            tx.executeSql(sql1, options1, successDrop, errorHandler );
        }

        db.transaction(dropType, errorHandler, successTransaction);


        function TypeTable(tx) {
            console.info("Creating table: type");
            var typeSql ="CREATE TABLE IF NOT EXISTS type( "
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                            + "name VARCHAR(20) NOT NULL);";

            var TypeOptions = [];

            function successCreate(){
                console.info("Success: Create table: Type successful.");
            }

            tx.executeSql(typeSql, TypeOptions, successCreate, errorHandler);
            
            var options = ["AR"];

            for (var i = 0; i < 8; i++)
            {
                if (i == 1)
                {
                    options = ["SR"];
                }

                else if (i == 2)
                {
                    options = ["SG"];
                }

                else if (i == 3)
                {
                    options = ["SG"];
                }

                else if (i == 4)
                {
                    options = ["ETC"];
                }

                else if (i == 5)
                {
                    options = ["LMG"];
                }

                else if (i == 6)
                {
                    options = ["Pistol"];
                }

                else if (i == 7)
                {
                    options = ["SMG"];
                }


                function callback() 
                {
                    console.info("Success: Record inserted successfully");
                }
    
                var sql = "INSERT INTO type(name) VALUES(?);";
                tx.executeSql(sql, options, callback, errorHandler);
            }
    
        }

        function BulletTable(tx) {
            console.info("Creating table: bullet");
            var bulletSql ="CREATE TABLE IF NOT EXISTS bullet( "
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                            + "name VARCHAR(20) NOT NULL);";

            var BulletOptions = [];

            function successCreate(){
                console.info("Success: Create table: Type successful.");
            }

            tx.executeSql(bulletSql, BulletOptions, successCreate, errorHandler);
            
            var options = ["7.76mm"];

            for (var i = 0; i < 7; i++)
            {
                if (i == 1)
                {
                    options = ["5.56mm"];
                }

                else if (i == 2)
                {
                    options = [".300 Magnum"];
                }

                else if (i == 3)
                {
                    options = ["12 Guage"];
                }

                else if (i == 4)
                {
                    options = ["Bolt"];
                }

                else if (i == 5)
                {
                    options = ["9mm"];
                }

                else if (i == 6)
                {
                    options = [".45 ACP"];
                }

                function callback() 
                {
                    console.info("Success: Record inserted successfully");
                }
    
                var sql = "INSERT INTO bullet(name) VALUES(?);";
                tx.executeSql(sql, options, callback, errorHandler);
            }
    
        }

        function WeaponTable(tx) {
            console.info("Creating table: weapon");
            var weaponSql = "CREATE TABLE IF NOT EXISTS weapon( " +
                        "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                        "weaponName VARCHAR(30) NOT NULL," +
                        "typeId INTEGER NOT NULL," +
                        "bulletId INTEGER NOT NULL," +
                        "damage INTEGER," +
                        "rateOfFire INTEGER," +
                        "bulletSpeed INTEGER," +
                        "reloadDuration INTEGER," +
                        "range INTEGER," +
                        "bodyHitImpact INTEGER," +
                        "FOREIGN KEY(typeId) REFERENCES type(id));";

            var weaponOptions = [];

            function successCreate(){
                console.info("Success: Create table: weapon successful.");
            }

            tx.executeSql(weaponSql, weaponOptions, successCreate, errorHandler);
        }

        function LocationTable(tx) {
            console.info("Creating table: location");
            var locationSql = "CREATE TABLE IF NOT EXISTS location( " +
                        "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                        "userName VARCHAR(30) NOT NULL," +
                        "lat INTEGER," +
                        "long INTEGER);";

            var locationOptions = [];

            function successCreate(){
                console.info("Success: Create table: location successful.");
            }

            tx.executeSql(locationSql, locationOptions, successCreate, errorHandler);
        }

        function successTransaction(){
            console.info("Success: Create tables transaction successful");
        }
        
        db.transaction(TypeTable, errorHandler, successTransaction );
        db.transaction(BulletTable, errorHandler, successTransaction );
        db.transaction(WeaponTable, errorHandler, successTransaction );
        db.transaction(LocationTable, errorHandler, successTransaction );
    },
    dropTables: function(){
        
        function dropType(tx){
            var sql1 = "DROP TABLE IF EXISTS type;";
            var options1 = [];
            
            function successDrop() {
                console.info("Success: type table dropped successfully");
            }
            tx.executeSql(sql1, options1, successDrop, errorHandler );
        }

        function dropWeapon(tx){
            var sql2 = "DROP TABLE IF EXISTS weapon;";
            var options2 = [];
            
            function successDrop() {
                console.info("Success: weapon table dropped successfully");
            }
            tx.executeSql(sql2, options2, successDrop, errorHandler );
        }
        
        function successTransaction(){
            console.info("Success: Drop tables transaction successful");
        }
        
        db.transaction(dropType, errorHandler, successTransaction);
        db.transaction(dropWeapon, errorHandler, successTransaction);
    }

};