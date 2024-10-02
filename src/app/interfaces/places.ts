export interface PlacesResponse {
    type:        string;
    query:       number[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
text_es: any;
    id:         string;
    type:       string;
    place_type: string[];
    relevance:  number;
    properties: Properties;
    text:       string;
    place_name: string;
    center:     number[];
    geometry:   Geometry;
    context?:   Context[];
    bbox?:      number[];
}

export interface Context {
    id:          string;
    mapbox_id:   string;
    text:        string;
    wikidata?:   string;
    short_code?: string;
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}

export interface Properties {
    foursquare?: string;
    landmark?:   boolean;
    category?:   string;
    maki?:       string;
    mapbox_id?:  string;
    wikidata?:   string;
    short_code?: string;
}
