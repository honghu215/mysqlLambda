# Connect AWS RDS from lambda function

### Steps

   1. create function and upload code
      ```
      npm init
      npm install mysql
      zip -r mysqlLambda.zip *
      ```  
      create a lambda function and upload .zip file and save
   
   2. set parameters

        set connection parameters in environment variables section, provide host, user, password and database

   1. set security group of RDS

        lambda function doesn't have a fixed ip address, so be sure to create a function within a VPC;
        and then add the ip range of the VPC to RDS security group.

        For example, if you create a lambda function within VPC, ip range defined as 172.16.0.0/16, then you add an inbound entry in the security group of RDS as: TCP, 3306, 172.16.0.0/16
