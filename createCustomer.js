'use strict';
const AWS = require("aws-sdk");

exports.createCustomer = async (event) => {
    console.log("Received event: ", event);
    const body = JSON.parse(event);
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    const putParams = {
        TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
        Item: {
            primary_key: body.name,
            email: body.email
        }
    };

    await dynamoDb.put(putParams).promise();

    return {
        statusCode: 201,
    }
}