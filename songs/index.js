const express = require('express')
const router = express.Router()
const { Songs, Artists, songsartists } = require('../models')

router.get('/', async (req, res) => {
  try {
    const results = await Songs.findAll({
      attributes: ["id", "name"],
      include: [{
        model: Artists,
        as: "artists",
        through: {
          attributes: []
        },
        attributes: ["name"]
      }]
    })
    res.status(200).json({ results: results || [] })
  } catch (e) {
    res.sendStatus(500)
  }
})

router.get('/:songId', async (req, res) => {
  const { songId } = req.params
  if (!songId) return res.sendStatus(400)
  try {
    const results = await Songs.findOne({
      where: {
        id: decodeURI(songId)
      },
      attributes: ["id", "name"],
      include: [{
        model: Artists,
        as: "artists",
        through: {
          attributes: []
        },
        attributes: ["name"],
      }]
    })
    res.status(200).json({ results: results || [] })
  } catch (e) {
    res.sendStatus(500)
  }
})

router.put('/:songId', async (req, res) => {
  const { songId } = req.params
  const { name } = req.body
  if (!songId || !name) return res.sendStatus(400)
  try {
    const results = await Songs.update({
      name
    }, {
      where: {
        id: songId
      }
    })
    if (results.length === 0) return res.sendStatus(422)
    res.sendStatus(200)
  } catch (e) {
    res.sendStatus(500)
  }
})

router.delete('/:songId', async (req, res) => {
  const { songId } = req.params
  if (!songId) return res.sendStatus(400)
  try {
    const results = await Promise.all([
      Songs.destroy({
        where: {
          id: songId
        }
      }),
      songsartists.destroy({
        where: {
          songId
        }
      })
    ])
    if (results[0] === 0 || results[1] === 0) return res.sendStatus(422)
    res.sendStatus(200)
  } catch (e) {
    res.sendStatus(500)
  }
})

module.exports = router