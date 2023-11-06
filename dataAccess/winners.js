require("./index");
const Winner = require("../models/winner");

exports.getWinners = async (matchId) => Winner.find({ matchId });

exports.addWinners = async (winners) => {
    const newWinners = winners.map((winner) => new Winner(winner));
    await Winner.insertMany(newWinners);
};