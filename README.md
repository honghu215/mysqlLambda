# Connect AWS RDS from lambda function

* Connection parameter

    set connection parameters in seperate json file: config.json

* set security group of RDS

    lambda function doesn't have a fixed ip address, so be sure to create a function within a VPC;
    and then add the ip range of the VPC to RDS security group.