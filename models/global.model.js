const knex = require("./../helpers/knex");
const createError = require("http-errors");

module.exports = {

    insert: async (table) => {
        return new Promise((resolve, reject) => {
            try {
                const doesInsert = knex(table.name).insert(table.insertData);
                resolve(doesInsert);
            } catch (error) {
                console.log(error.message);
                reject(createError.InternalServerError());
            }
        });
    },

    select: async (table) => {
        return new Promise((resolve, reject) => {
            try {
                const doesSelect = knex.select(table.filter).from(table.name);
                if (table.leftJoin) {
                    table.leftJoin.forEach((leftJoin) => {
                        if (leftJoin.as) {
                            doesSelect.leftJoin(
                                leftJoin.tableAs,
                                table.name + "." + leftJoin.leftKey,
                                leftJoin.as + "." + leftJoin.joinKey
                            );
                        } else if (leftJoin.leftTableName) {
                            doesSelect.leftJoin(
                                leftJoin.joinTable,
                                leftJoin.leftTableName + "." + leftJoin.leftKey,
                                leftJoin.joinTable + "." + leftJoin.joinKey
                            );
                        } else {
                            doesSelect.leftJoin(
                                leftJoin.joinTable,
                                table.name + "." + leftJoin.leftKey,
                                leftJoin.joinTable + "." + leftJoin.joinKey
                            );
                        }
                    });
                }
                if (table.condition) {
                    table.condition.forEach((condition) => {
                        doesSelect.where(condition);
                    });
                }
                if (table.whereInName) {
                    table.whereInName.forEach((whereInName) => {
                        doesSelect.whereIn(whereInName, table.whereInValue);
                    });
                }
                if (table.like) {
                    table.like.forEach((like) => {
                        doesSelect.where(like.name, "like", like.condition);
                    });
                }
                if (table.whereNot) {
                    table.whereNot.forEach((whereNot) => {
                        doesSelect.whereNot(whereNot);
                    });
                }
                if (table.count) {
                    table.count.forEach((count) => {
                        doesSelect.count(count.name, { as: count.newName });
                    });
                }
                if (table.sum) {
                    table.sum.forEach((sum) => {
                        doesSelect.sum(sum.name, { as: sum.newName });
                    });
                }
                if (table.groupBy) {
                    table.groupBy.forEach((groupBy) => {
                        doesSelect.groupBy(groupBy.name);
                    });
                }
                if (table.orderBy) {
                    table.orderBy.forEach((orderBy) => {
                        doesSelect.orderBy(orderBy.name, orderBy.type);
                    });
                }
                if (table.limit) {
                    table.limit.forEach((limit) => {
                        doesSelect.limit(limit.size);
                    });
                }
                resolve(doesSelect);
            } catch (error) {
                console.log(error.message);
                reject(createError.InternalServerError());
            }
        });
    },

    update: async (table) => {
        return new Promise((resolve, reject) => {
            try {
                const doesUpdate = knex(table.name);
                if (table.condition) {
                    table.condition.forEach((condition) => {
                        doesUpdate.where(condition);
                    });
                    if (table.updateData) {
                        table.updateData.forEach((updateData) => {
                            doesUpdate.update(updateData);
                        });
                    }
                }
                resolve(doesUpdate);
            } catch (error) {
                console.log(error.message);
                reject(createError.InternalServerError());
            }
        });
    },

    delete: async (table) => {
        return new Promise((resolve, reject) => {
            try {
                const doesDelete = knex(table.name).where(table.condition).del();
                resolve(doesDelete);
            } catch (error) {
                console.log(error.message);
                reject(createError.InternalServerError());
            }
        });
    },
};