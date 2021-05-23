const router = require('express').Router();
const Game = require('../db').import('../models/game');
const { StatusCodes } = require('http-status-codes');

router.get('/all', (req, res) => {
    Game.findAll({ where: { owner_id: req.user.id } })
        .then(
            games => {
                res.status(StatusCodes.OK).json({
                    games: games,
                    message: "Data fetched."
                });
            },

            () => {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .json({
                        message: "Data not found"
                    });
            }
        );
});

router.get('/:id', (req, res) => {
    Gae.findOmne({ where: { id: req.params.id, owner_id: req.user.id } })
        .then(
            game => {
                res.status(StatusCodes.OK).json({
                    game: game
                });
            },

            () => {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    message: "Data not found."
                });
            }
        );
});

router.post('/create', (req, res) => {
    const body = req.body;
    const game = req.body.game;
    Game.create({
        title: game.title,
        owner_id: body.user.id,
        studio: game.studio,
        esrb_rating: game.esrb_rating,
        user_rating: game.user_rating,
        have_played: game.have_played
    }) .then(
        game => {
            res.status(StatusCodes.OK).json({
                game: game,
                message: "Game created."
            });
        },

        err => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err.message);
        }
    );
});

router.put('/update/:id', (req, res) => {
    Game.update({
        title: req.body.game.title,
        studio: req.body.game.studio,
        esrb_rating: req.body.game.esrb_rating,
        user_rating: req.body.game.user_rating,
        have_played: req.body.game.have_played
    },
    {
        where: {
            id: req.params.id,
            owner_id: req.user.id
        }
    })
    .then(
        game => {
            res.status(StatusCodes.OK)
                .json({
                    game: game,
                    message: "Successfully updated."
                });
        },

        err => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    message: err.message
                });
        }
    );
});

router.delete('/remove/:id', (req, res) => {
    Game.destroy({
        where: {
            id: req.params.id,
            owner_id: req.user.id
        }
    })
    .then(
        game => {
            res.status(StatusCodes.OK)
                .json({
                    game: game,
                    message: "Successfully deleted"
                });
        },

        err => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    error: err.message
                });
        }
    );
});

module.exports = router;