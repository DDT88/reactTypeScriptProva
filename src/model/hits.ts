

    export interface VariableStats {
        value2: string;
        value1: string;
    }

    export interface Summary {
        duration: number;
        fail: number;
        total: number;
        variable_stats: VariableStats;
        pass: number;
        weight: number;
        skip: number;
    }

    export interface DocumentationsId {
        id_doc_ts1_2: string;
        id_doc_ts1_3: string;
        id_doc_ts1_1: string;
    }

    export interface Hit {
        product_id: string;
        summary: Summary;
        title: string;
        exec_var: string;
        static_report: string;
        id: string;
        executor: string;
        build_number: string;
        timestamp: Date;
        img: string;
        parent_run_id: string;
        description: string;
        ver: string;
        documentations_id: DocumentationsId;
        ref_children: string[];
        run_id: string;
    }

    export interface Hits {
        hits: Hit[];
    }


