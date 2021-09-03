/*
 * @Author: Maslow<wangfugen@126.com>
 * @Date: 2021-08-29 11:35:05
 * @LastEditTime: 2021-09-03 23:59:53
 * @Description:
 */

import { Router } from "express"
import { handleCreatePolicy } from "./create"
import { handleGetPolicies, handleGetPolicyById } from "./get"
import { handlePublishPolicies } from "./publish"
import { handleRemovePolicyById } from "./remove"


export const PolicyRouter = Router()

/**
 * Get policies of an application
 */
PolicyRouter.get('/', handleGetPolicies)

/**
 * Get a policy of an application by policy id
 */
PolicyRouter.get('/:policy_id', handleGetPolicyById)

/**
 * Create a policy
 */
PolicyRouter.post('/create', handleCreatePolicy)

/**
 * Update the policy's info except the rules
 */
PolicyRouter.post('/:policy_id/info')

/**
 * Update the policy's rules
 */
PolicyRouter.post('/:policy_id/rules')

/**
 * Delete a policy
 */
PolicyRouter.delete('/:policy_id', handleRemovePolicyById)

/**
 * Publish the policies of the application
 */
PolicyRouter.post('/publish', handlePublishPolicies)