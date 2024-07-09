import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

export async function fetchOpenSearchDescription(url: string, spHttpClient: SPHttpClient): Promise<string> {
  const response: SPHttpClientResponse = await spHttpClient.get(url, SPHttpClient.configurations.v1);
  const xml: string = await response.text();
  return xml;
}

export function parseOpenSearchXML(xml: string): any {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, 'text/xml');
  const items = xmlDoc.getElementsByTagName('Url');
  const fields: any[] = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    fields.push({
      type: item.getAttribute('type'),
      template: item.getAttribute('template'),
    });
  }

  return fields;
}
