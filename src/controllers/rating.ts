import express, { Request, Response, NextFunction } from 'express'
import { RatingModel } from '@/models'
import { IRating } from '@/interfaces'


const list = async (req: Request, res: Response, next: NextFunction) => {

  const result: IRating = await RatingModel.find({})

  result.isUpVote = true


}