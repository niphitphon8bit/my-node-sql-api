const createError = require("http-errors");
const knex = require("../helpers/knex");
const globalModel = require("../models/global.model");
const accountModel = require("../models/account.model");

module.exports = {
   

    get: async (req, res, next) => {
        // passing data from query string validate data from

        // const getAssignmentData = await getAssignmentSchema.validateAsync(
        //     req.query
        // );

        try {
            const doesGetAll = await globalModel.select({
                name: "wm_transaction_type",
                // condition: [getAssignmentData],
                // whereNot: [{ assignmentStatus: "delete" }],
                filter: [
                    "type_id",
                    "type_name",
                ],
            });
            res.status(201).send({ doesGetAll });
        } 
        catch (error) {
            if (error.isJoi === true) return next(createError.InternalServerError());
            next(error);
        }
    },

    // function name: get
    // description: create Assignment by API
    // input: query string : condition {assingmetTitle, assingmentDescription, assingmentStartDate, assingmentEndDate ,assingmentStatus}
    // output: {assingmetTitle, assingmentDescription, assingmentStartDate, assingmentEndDate ,assingmentStatus}
    // CreateBy: Atikom Wongwan / CreateDate: 19/2/2021
    // UpdateBy: Niphitphon Thantkulkit / UpdateDate: 28/2/2021

    // getProblemByTag: async (req, res, next) => {
    //     // passing data from query string validate data from
    //     // const getAssignmentData = await getAssignmentSchema.validateAsync(
    //     //   req.query
    //     // );

    //     try {
    //         // const doesGetAll = await knex
    //         //   .select("*")
    //         //   .from("tags")
    //         //   .leftJoin("hashtags", "tags.tagId", "hashtags.hashtagTagId")
    //         //   .leftJoin(
    //         //     "problems",
    //         //     "hashtags.hashtagProblemId",
    //         //     "problems.problemId"
    //         //   );
    //         // console.log(req.body);
    //         if (req.body.tagIdValue == "") {
    //             console.log("in if");
    //             var doesGetAll = await globalModel.select({
    //                 name: "tags",
    //                 // whereInName: [req.body.tagId],
    //                 // whereInValue: req.body.tagIdValue,
    //                 whereNot: [{ problemStatus: "delete" }],
    //                 // filter: [
    //                 //   "problemTitle",
    //                 // ],
    //                 leftJoin: [
    //                     {
    //                         joinTable: "hashtags",
    //                         leftTableName: "tags",
    //                         leftKey: "tagId",
    //                         joinKey: "hashtagTagId",
    //                     },
    //                     {
    //                         joinTable: "problems",
    //                         leftTableName: "hashtags",
    //                         leftKey: "hashtagProblemId",
    //                         joinKey: "problemId",
    //                     },
    //                 ],
    //             });
    //         } else {
    //             console.log("else")
    //             var doesGetAll = await globalModel.select({
    //                 name: "tags",
    //                 whereInName: [req.body.tagId],
    //                 whereInValue: req.body.tagIdValue,
    //                 whereNot: [{ problemStatus: "delete" }],
    //                 // filter: [
    //                 //   "problemTitle",
    //                 // ],
    //                 leftJoin: [
    //                     {
    //                         joinTable: "hashtags",
    //                         leftTableName: "tags",
    //                         leftKey: "tagId",
    //                         joinKey: "hashtagTagId",
    //                     },
    //                     {
    //                         joinTable: "problems",
    //                         leftTableName: "hashtags",
    //                         leftKey: "hashtagProblemId",
    //                         joinKey: "problemId",
    //                     },
    //                 ],
    //             });
    //         }
    //         res.status(201).send({ doesGetAll });
    //     } catch (error) {
    //         if (error.isJoi === true) return next(createError.InternalServerError());
    //         next(error);
    //     }
    // },

    // function name: update
    // desxription: update Assignment by condition
    // input: condition when update / condition: {assingmetTitle, assingmentDescription, assingmentStartDate, assingmentEndDate ,assingmentStatus}
    // output: text response
    // CreateBy: Atikom Wongwan / CreateDate: 19/2/2021
    // UpdateBy: Atikom Wongwan / UpdateDate: 19/2/2021

    // update: async (req, res, next) => {
    //     const updateCondition = await updateAssignmentConditionSchema.validateAsync(
    //         req.query
    //     );
    //     const updateAssignmentData = await updateAssignmentSchema.validateAsync(
    //         req.body
    //     );
    //     // try call function deleteAssignment in global model then catch if error
    //     try {
    //         const doesUpdate = await globalModel.update({
    //             name: "assignments",
    //             condition: [updateCondition],
    //             updateData: [updateAssignmentData],
    //         });
    //         res.status(200).send({ doesUpdate });
    //     } catch (error) {
    //         if (error.isJoi === true) return next(createError.InternalServerError());
    //         next(error);
    //     }
    // },
};