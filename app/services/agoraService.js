import agoraClient from "../clients/agoraClient.js";
import managedServiceClient from "../clients/managedServiceClient.js";

export async function getAuthToken(user) {
  const headers = {
    'X-API-KEY': process.env.AGORA_API_KEY
  };

  const res = await managedServiceClient.post('/v1/token/generate', {
    user_id: user,
    roles: []
  }, { headers });
  return res.data;
}

export async function refreshToken(token) {
  const headers = {
    'Authorization': `Bearer ${token}`
  };
  const res = await managedServiceClient.post('/v1/token/refresh', null, { headers });
  return res.data;
}

export async function logout(token) {
  const headers = {
    'Authorization': `Bearer ${token}`
  };

  const res = await managedServiceClient.get('/v1/logout', null, { headers });
  return res.data;
}

export async function getProjects() {
  const res = await agoraClient.get('/dev/v2/projects');
  return res.data;
}

export async function getBuildToken(appId) {
  const instanceId = process.env.AGORA_CHANNEL_NAME;

  const data = {
    instanceId: instanceId,
  };

  const res = await agoraClient.post(`/v1/projects/${appId}/rtsc/speech-to-text/builderTokens`, data);
  return res.data;
}

export async function startTranscription(appId, tokenName) {
  const channelName = process.env.AGORA_CHANNEL_NAME;
  const data = {
    languages: ["en-US"],
    maxIdleTime: 60,
    rtcConfig: {
      channelName: channelName,
      subBotUid: "123",
      subBotToken: "123",
      pubBotUid: "123",
      pubBotToken: "123",
    },
  };
  const res = await agoraClient.post(`v1/projects/${appId}/rtsc/speech-to-text/tasks?builderToken=${tokenName}`, data);
  return res.data;
}
