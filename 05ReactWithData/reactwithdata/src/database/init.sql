CREATE DATABASE ReactData;
GO

use ReactData;

create table Items (
    id int identity(1,1) primary key,
    name nvarchar(255) not null
);